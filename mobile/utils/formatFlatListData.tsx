type ActionType = {
    action?: boolean;
    empty?: boolean;
};

type EmptyType = {
    empty?: boolean;
};

export type ActionEmptyType = { key: string } & EmptyType & ActionType;

const formatFlatListData = (
    data: any,
    numColumns: number,
    withAction: boolean
) => {
    const newArray = [];
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElemensLastRow = data.length - numberOfFullRows * numColumns;

    if (withAction) {
        const actionItem: ActionEmptyType = { key: "action", action: true };
        newArray.push(actionItem);
        numberOfElemensLastRow++;
    }

    while (
        numberOfElemensLastRow !== numColumns &&
        numberOfElemensLastRow !== 0
    ) {
        const emptyItem: ActionEmptyType = {
            key: `blank-${numberOfElemensLastRow}`,
            empty: true,
        };
        newArray.push(emptyItem);
        numberOfElemensLastRow++;
    }
    console.log("Data", [...data, ...newArray]);
    return [...data, ...newArray];
};

export default formatFlatListData;
