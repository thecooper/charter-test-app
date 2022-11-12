import React, { useState, useEffect } from "react";
import { Typography, Card, Row, Col, Statistic } from "antd";
import { getUserTransactions } from "../api/getUserTransactions";
import classes from "./RebateSummary.module.css";
import { useUserRebatesByMonth } from "../hooks/useUserRebatesByMonth"

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

function UserCard({ user }) {
    const userRebatesByMonth = useUserRebatesByMonth(user);

    if (!user) {
        return null;
    }

    return <Card title={user.name} className={classes.userCard}>
        <Row justify="space-between">
            {userRebatesByMonth.map(({ month, rebateAmount }) =>
                <Col key={month}>
                    <Statistic title={month} value={rebateAmount} />
                </Col>
            )}
        </Row>
    </Card>
}
