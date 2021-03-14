import React, { useCallback, useContext, useState } from "react";
import {
    View,
    Text,
    TouchableHighlight,
    Button,
    Platform,
    Alert,
} from "react-native";
import { ScreenProps } from "./ScreenParamList";
import {
    ExpenseIncomeContext,
    ExpenseIncomeType,
} from "../provider/ExpenseIncomeProvider";
import { buttonStyle, utilStyle } from "../styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import InputPrimary from "../components/inputs/InputPrimary";
import FormGroup from "../components/Form/FormGroup";
import dayjs from "dayjs";
import { Feather } from "@expo/vector-icons";
import Container from "../components/utils/Container";
import Heading from "../components/typography/Heading";
import { COLORS } from "../constants";
import PrimaryButton from "../components/buttons/PrimaryButton";

const AddTransaction: React.FC<ScreenProps<"AddTransaction">> = ({
    navigation,
}) => {
    const { addExpense } = useContext(ExpenseIncomeContext);
    const [showDate, setShowDate] = useState(false);
    const [expense, setExpense] = useState<ExpenseIncomeType>({
        amount: 200,
        comment: "Hello World",
        categoryId: 1,
        date: new Date(),
    });

    const onChange = (prop: keyof ExpenseIncomeType, value: any) => {
        setExpense((prevValue) => ({ ...prevValue, [prop]: value }));
    };

    const onChangeDate = (event: any, selectedDate: any) => {
        setShowDate(false);
        const currentDate = selectedDate || expense.date;
        onChange("date", currentDate);
    };

    const showDatePicker = useCallback(() => {
        setShowDate(true);
    }, [setShowDate]);

    const getAmount = () => {
        return expense.amount ? expense.amount.toString() : "";
    };

    const getCategory = () => {
        return expense.categoryId ? expense.categoryId.toString() : "";
    };

    const onAddExpense = () => {
        const { amount, date, categoryId, comment } = expense;
        if (amount && date && categoryId && comment) {
            addExpense(expense);
            navigation.navigate("Home");
        } else {
            Alert.prompt("Empty Fields", "Some fields are empty");
        }
    };

    const formatDate = (date: Date) => {
        return dayjs(date).format("MMMM DD, YYYY");
    };

    return (
        <Container>
            <Heading style={utilStyle.mb1}>Add Expense</Heading>
            <FormGroup>
                <InputPrimary
                    icon={<Feather name='dollar-sign' />}
                    keyboardType='numeric'
                    value={getAmount()}
                    placeholder='Expenses Amount'
                    onChangeText={(text) => onChange("amount", text)}
                />
            </FormGroup>
            <FormGroup>
                <InputPrimary
                    icon={<Feather name='message-square' />}
                    value={getCategory()}
                    placeholder='Select Category'
                    onChangeText={(text) => onChange("categoryId", text)}
                    onTouchStart={() => navigation.navigate("Category")}
                />
            </FormGroup>

            <FormGroup>
                <InputPrimary
                    icon={<Feather name='calendar' />}
                    value={formatDate(expense.date)}
                    onTouchStart={showDatePicker}
                    placeholder='Date'
                />
            </FormGroup>
            <FormGroup>
                <InputPrimary
                    icon={<Feather name='message-square' />}
                    value={expense.comment}
                    placeholder='Comment'
                    onChangeText={(text) => onChange("comment", text)}
                />
            </FormGroup>
            <FormGroup>
                <PrimaryButton
                    onPress={() => {
                        onAddExpense();
                    }}>
                    Add Expense
                </PrimaryButton>
            </FormGroup>
            {showDate ? (
                <DateTimePicker
                    display='default'
                    testID='dateTimePicker'
                    mode='date'
                    textColor={COLORS.primary}
                    value={expense.date}
                    onChange={onChangeDate}
                />
            ) : null}
        </Container>
    );
};

export default AddTransaction;
