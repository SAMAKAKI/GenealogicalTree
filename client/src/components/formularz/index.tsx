import React from 'react';
import { DateInput } from "@nextui-org/date-input";
import { CalendarDate } from "@internationalized/date";
import { Input } from "@nextui-org/input";
import { Button } from '@nextui-org/react';
import { useState } from "react";

interface FormularzProps {
    onAddPerson: (name: string, birthDate: string, deathDate: string, linkedId: number) => void;
}

export const Formularz: React.FC<FormularzProps> = ({ onAddPerson }) => {
    const [number, setNumber] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [birthDate, setBirthDate] = useState(new CalendarDate(1995, 11, 6));
    const [deathDate, setDeathDate] = useState(new CalendarDate(1995, 11, 6));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddPerson(name, birthDate.toString(), deathDate.toString(), number);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-3">
                    <Input
                        type="text"
                        label="First and Last Name"
                        className="max-w-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-3">
                    <DateInput
                        label={"Birth Date"}
                        placeholderValue={new CalendarDate(1995, 11, 6)}
                        className="max-w-sm"
                        value={birthDate}
                        onChange={(date) => setBirthDate(date)}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-3">
                    <DateInput
                        label={"Death Date"}
                        placeholderValue={new CalendarDate(1995, 11, 6)}
                        className="max-w-sm"
                        value={deathDate}
                        onChange={(date) => setDeathDate(date)}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-3">
                    <Input
                        type="number"
                        label="ID to Link"
                        className="max-w-sm"
                        value={number}
                        onChange={(e) => setNumber(parseInt(e.target.value))}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-3">
                    <Button color='primary' type="submit">Add</Button>
                </div>
                
            </form>
        </div>
    );
}
