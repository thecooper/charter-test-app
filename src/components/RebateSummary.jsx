import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { getUserTransactions } from "../api/getUserTransactions";
import classes from "./RebateSummary.module.css";
import { UserCard } from "./UserCard";

const { Title } = Typography;

export function RebateSummary() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserTransactions()
            .then(setUsers);
    }, []);

    return <section>
        <Title>Rebate Summary</Title>
        <p>Below, you'll find a breakdown of all user transactions by month.</p>
        <div className={classes.cardWrapper}>
            {users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
    </section>;
}
