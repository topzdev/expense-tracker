import { IconType } from "../components/cards/IconCard";
import {
    CategoryType,
    ExpenseIncomeType,
} from "../provider/ExpenseIncomeProvider";

export const ICONS: IconType[] = [
    {
        id: 1,
        icon: "drink",
        type: "Entypo",
        name: "Alcohol",
    },
    {
        id: 1,
        icon: "wine-bottle",
        type: "FontAwesome5",
        name: "Alcohol",
    },
    {
        id: 2,
        icon: "bank",
        type: "FontAwesome",
        name: "Bank",
    },
    {
        id: 3,
        icon: "piggy-bank",
        type: "FontAwesome5",
        name: "Piggy Bank",
    },
    {
        id: 4,
        icon: "food-fork-drink",
        type: "MaterialCommunityIcons",
        name: "Food & Drinks",
    },
    {
        id: 5,
        icon: "lipstick",
        type: "MaterialCommunityIcons",
        name: "Food & Drinks",
    },
    {
        id: 6,
        icon: "ticket",
        type: "FontAwesome",
        name: "Food & Drinks",
    },
    {
        id: 7,
        icon: "ribbon-outline",
        type: "Ionicons",
        name: "Food & Drinks",
    },
    {
        id: 7,
        icon: "shopping-basket",
        type: "FontAwesome",
        name: "Food & Drinks",
    },
    // {
    //     id: 10,
    //     icon: "shopping-basket",
    //     type: "FontAwesome",
    //     name: "Food & Drinks",
    // },
];

export const CATEGORY: CategoryType[] = [
    {
        id: 1,
        name: "Foods & Drinks",
        icon: "fast-food-outline",
    },
    {
        id: 2,
        name: "Transportation",
        icon: "car-outline",
    },
    {
        id: 3,
        name: "Clothing",
        icon: "shirt-outline",
    },
    {
        id: 4,
        name: "Clothing",
        icon: "shirt-outline",
    },
    {
        id: 5,
        name: "Clothing",
        icon: "shirt-outline",
    },
    {
        id: 6,
        name: "Clothing",
        icon: "shirt-outline",
    },
];

export const EXPENSES_DUMMY: ExpenseIncomeType[] = [
    {
        id: "1",
        amount: 153.0,
        comment: "Jojo's Food Garage Hamburger with Chads",
        categoryId: 1,
        date: new Date(),
    },
    {
        id: "2",
        amount: 362.5,
        comment: "Gilmore to Home Grab",
        categoryId: 2,
        date: new Date(),
    },
    {
        id: "3",
        amount: 420,
        comment: "Penshopee Shirt",
        categoryId: 2,
        date: new Date(),
    },
];

const data = { CATEGORY, EXPENSES_DUMMY, ICONS };

export default data;
