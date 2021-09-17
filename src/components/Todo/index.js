import React, { useState } from "react";

import * as S from "./stylies"

function Todo() {

    const [task, setTask] = useState({
        text: "",
        list: [],
    })

    const handleChange = (ev) => {
        setTask({
            text: ev.target.value,
            list: task.list
        })
    };
    const handleClick = () => {
        if (task.text.length > 0) {
            setTask({
                list: task.list.concat(task.text),
                text: task.text
            })
        }


    };

    return (
        <S.Container>
            <S.Box>
                <S.Input value={task.text} onChange={handleChange} />
                <S.BoxBtn>
                    <S.Btn onClick={handleClick}>ADD</S.Btn>
                </S.BoxBtn>
            </S.Box>
            <S.BoxMap>
                {
                    task.list.map((item) => (
                        <S.Render>
                            <p>{item}</p>
                        </S.Render>
                    ))
                }
            </S.BoxMap>
        </S.Container>
    );
}

export default Todo;
