import React, { memo } from "react";
import { Card, Row, Col, Statistic } from "antd";
import classes from "./RebateSummary.module.css";
import { useUserRebatesByMonth } from "../hooks/useUserRebatesByMonth";

export const UserCard = memo(({ user }) => {
    const userRebatesByMonth = useUserRebatesByMonth(user);

    if (!user) {
        return null;
    }

    return <Card title={user.name} className={classes.userCard}>
        <Row justify="space-between">
            {userRebatesByMonth.map(({ month, rebateAmount }) => <Col key={month}>
                <Statistic title={month} value={rebateAmount} />
            </Col>
            )}
        </Row>
    </Card>;
});
