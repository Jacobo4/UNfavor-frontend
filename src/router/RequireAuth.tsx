//Core
import React from "react";
//Router
import {Navigate} from "react-router-dom";
//Icons
import {BsShieldLockFill} from "react-icons/bs";
import {useAppSelector} from "@store/hooks";

//TODO: Style this page
const AccessDenied = () => {
    return (
        <div>
            <BsShieldLockFill size={200} color={"#fa4b8b"}/>
            <h3> Acá no puedes entrar :(</h3>
        </div>
    )
}


//TODO: Find the correct type for the attribute "component"
const RequireAuth = ({component: RouteComponent, ...rest}: {component: React.FC}) => {

    const {isLogged} = useAppSelector((state) => state.auth);

    if (!isLogged) {
        return <Navigate to={"/auth/login"} replace/>
    }
    else {
        return <RouteComponent {...rest}/>
    }
}


// {
//     user: {
//         name: string,
//         email: string,
//         password: string,
//         phone: string,
//         age: number,
//         user_reviews_num: string,
//         user_reviews_sum: string,
//         user_favors: Array<string>
//     },
//     favor: {
//         title: string,
//         description: string,
//         price: number,
//         location: string
//     }
// }

export default RequireAuth;