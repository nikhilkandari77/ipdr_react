import React from "react";
import { Card, Grid } from "@mui/material";
import DonutChart from "./DonutChart";
import LogTable from "./LogTable";

const Home = () => {
    return (
        <div className="home" style={{ margin: '2vw' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} sm={6}   >
                    <Card style={{ height: '100%', background: 'khaki' }}>
                        <h3>Last 10 min Record</h3>
                        <h1>251610</h1>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={6}   >
                    <Card style={{ height: '100%', background: 'mediumseagreen' }}>
                        <h3>Total Record</h3>
                        <h1>251610</h1>
                    </Card>
                </Grid>
                <Grid item md={6} xs={12} sm={12}   >
                    <Card style={{ minHeight: '80%', padding: "0 10px 0 10px " }}>
                        <Grid container style={{ minHeight: '80%',padding:"15px" }}>
                            <Grid item md={5} xs={12} sm={6}    textAlign="left">
                                <h3>Collector Status</h3>
                                <Grid>
                                    <DonutChart />
                                </Grid>
                            </Grid>
                            <Grid container md={7} xs={12} sm={6}   >
                                <Grid item md={6} xs={6} sm={6}   >
                                    <h3>Name</h3>
                                </Grid>
                                <Grid item md={6} xs={6} sm={6}   >
                                    <h3>Status</h3>
                                </Grid>
                                <Grid item md={12} xs={12} sm={12}   >
                                    <Grid container style={{ padding: "10px", borderRadius: "10px", border: "1px solid", background: "ghostwhite " }}>
                                        <Grid item md={6} xs={6} sm={6}    textAlign="left">
                                            <span style={{ padding: "8px", background: "green", color: "white", borderRadius: "5px" }}>1</span> &nbsp;
                                            Collector 1</Grid>

                                        <Grid item md={6} xs={6} sm={6}    color={"green"}>Running</Grid>

                                    </Grid>

                                    <br />

                                    <Grid container style={{ padding: "10px", borderRadius: "10px", border: "1px solid", background: "ghostwhite " }}>
                                        <Grid item md={6} xs={6} sm={6}    textAlign="left">
                                            <span style={{ padding: "8px", background: "red", color: "white", borderRadius: "5px" }}>1</span> &nbsp;
                                            Collector 2</Grid>
                                        <Grid item md={6} xs={6} sm={6}    color={"red"}>Down</Grid>

                                    </Grid>



                                </Grid>
                             
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid><br/>
            <Grid>
                <LogTable />
            </Grid>
        </div>
    )
}
export default Home;