import React, { useState } from "react";

import * as S from "./stylies"

function Todo() {



    return (
        <S.Container>
            <S.Input />
            <div>
            <S.Btn>ADD</S.Btn>
            </div>

        </S.Container>
    );
}

export default Todo;
