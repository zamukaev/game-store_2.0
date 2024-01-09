"use client";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";
import Button from "@/components/ui/button/Button";
import { NavItem } from "@/components/ui/navItem/NavItem";
import InputPrice from "@/components/ui/inputPrice/InputPrice";
import Rating from "@/components/ui/rating/Rating";
import Counter from "@/components/ui/counter/Counter";
import RadioGroup from "@/components/ui/radioGroup/RadioGroup";
import Range from "@/components/ui/range/Range";
import Card from "@/components/ui/card/Card";
import Switcher from "@/components/ui/switcher/Switcher";
import SearchInput from "@/components/ui/searchInput/SearchInput";
import ReviewInput from "@/components/ui/reviewInput/ReviewInput";
import UserInput from "@/components/ui/userInput/UserInput";

export default function Home() {
    const [price, setPrice] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);
    const [count, setCount] = useState(0);
    const [isToggled, setIsToggled] = useState(false);

    const onSearch = (query: string) => {
        console.log(query);
    };

    return (
        <main className="main">
            <NavItem kind="cart" text="Корзина" href="/cart" />
            <NavItem
                kind="login"
                text="Войти"
            />
            <NavItem kind="favorites" text="Избранное" href="/favorites" />
            <Button kind="cart">
                <CartIcon />
                <p>Перейти на главную</p>
            </Button>
            <Button kind="gray">
                <p>Выйти из аккаутна</p>
            </Button>
            <InputPrice
                placeholder="от 199"
                value={price}
                setValue={setPrice}
            />
            <Rating rating={rating} setRating={setRating} isEditable={true} />
            <Counter initialCount={count} />
            <RadioGroup />
            <Card />
            <Switcher
                isToggled={isToggled}
                onToggle={() => setIsToggled(!isToggled)}
            />
            {/* <Range /> */}
            <UserInput kind="password" />
            <UserInput kind="number" />
            <UserInput kind="username" />
            <SearchInput onSearch={onSearch} placeholder="Поиск товара" />
            <ReviewInput
                label="Достоинства"
                placeholder="Что вам понравилось"
            />
            <ReviewInput label="Недостатки" placeholder="Что не понравилось" />
            <ReviewInput label="Комментарий" placeholder="Другие впечатления" />
        </main>
    );
}
