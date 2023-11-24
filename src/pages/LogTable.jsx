import React, { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { InputLabel, Typography } from '@mui/material';
import { Card, Grid, TextField, Button } from "@mui/material";
import ExportToExcel from './ExportToExcel';
import { FormControl, MenuItem, Select } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';


const columns = [
    { field: 'id', headerName: 'ID', width: 70, renderCell: (params) => <CustomIdCell {...params} /> },
    { field: 'clientIp', headerName: 'Client IP', width: 150 },
    { field: 'sourcePort', headerName: 'Source Port', width: 150 },
    { field: 'destinationIp', headerName: 'Destination IP', width: 150 },
    { field: 'destPort', headerName: 'Dest Port', width: 150 },
    { field: 'protocol', headerName: 'Protocol', width: 150 },
    { field: 'startTime', headerName: 'Start Time', width: 150 },
    { field: 'endTime', headerName: 'End Time', width: 150 },
    { field: 'sessionDuration', headerName: 'Session Duration', width: 150 },
    { field: 'llbWanIp', headerName: 'LLB WAN IP', width: 150 },
    { field: 'natIp', headerName: 'Nat IP', width: 150 },
];

const rows = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 25 },
    { id: 3, firstName: 'Bob', lastName: 'Smith', age: 40 },
    { id: 4, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 5, firstName: 'Jane', lastName: 'Doe', age: 25 },
    { id: 6, firstName: 'Bob', lastName: 'Smith', age: 40 },
    { id: 7, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 8, firstName: 'Jane', lastName: 'Doe', age: 25 },
    { id: 9, firstName: 'Bob', lastName: 'Smith', age: 40 },
    { id: 10, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 11, firstName: 'Jane', lastName: 'Doe', age: 25 },
    { id: 12, firstName: 'Bob', lastName: 'Smith', age: 40 },
];

const getRowId = (row) => row.id;

const CustomIdCell = ({ value }) => {
    const color = `#478${value.toString(16).slice(0, 6)}`;
    return <div style={{ backgroundColor: color, padding: '8px', borderRadius: '4px' }}>{value}</div>;
};



const LogTable = () => {
    const [state, setState] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);


    useEffect(() => {
        // Fetch data from the server based on currentPage and pageSize
        // Replace this with your actual API call
        fetchDataFromServer();
      }, [currentPage, pageSize]);
    
      const fetchDataFromServer = () => {
        // Replace this with your actual API endpoint and parameters
        const apiUrl = `/api/data?pageSize=${pageSize}&page=${currentPage}`;
    
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            // setRows(data.rows); // Set the data rows
            // setTotalRows(data.total); // Set the total number of rows on the server
          })
          .catch((error) => console.error('Error fetching data:', error));
      };
  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    const handleChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };


    const handlePaginationModelChange = (params) => {
        setCurrentPage(params.page);
        setPageSize(params.pageSize);
    };



    return (
        <div style={{ minHeight: 600, width: '100%' }}>
            <form onSubmit={handleSubmit}>

                <Grid container spacing={2}>
                    <Grid item md={3} xs={12} sm={6} alignItems="center" justifyContent="center">
                        <div><TextField onChange={handleChange} id="publicIp" label="Public IP" variant="outlined" required fullWidth /></div><br />
                        <div><TextField onChange={handleChange} id="port" label="Port" variant="outlined" required fullWidth /></div>
                    </Grid>
                    <Grid item md={3} xs={12} sm={6} alignItems="center" justifyContent="center">
                        <div><TextField onChange={handleChange} id="sourceIp" label="Source IP" variant="outlined" required fullWidth /></div><br />
                        <div><FormControl variant="outlined" fullWidth>
                            <InputLabel id="select-label">Duration</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                // value={selectedOption}
                                onChange={handleChange}
                                label="Duration"
                                required
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="option1">Option 1</MenuItem>
                                <MenuItem value="option2">Option 2</MenuItem>
                                <MenuItem value="option3">Option 3</MenuItem>
                            </Select>
                        </FormControl></div>
                    </Grid>
                    <Grid item md={3} xs={12} sm={6} alignItems="center" justifyContent="center">
                        <div>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} fullWidth />}
                                    label="Select Date and Time"
                                    id="from"
                                    // value={selectedDate}
                                    onChange={handleChange}
                                    required
                                />
                            </LocalizationProvider>
                        </div><br />
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} fullWidth />}
                                    label="Select Date and Time"
                                    id="to"
                                    // value={selectedDate}
                                    onChange={handleChange}
                                    required
                                />
                            </LocalizationProvider>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12} sm={6} container alignItems="center" justifyContent="center">
                        <Button type="submit" style={{ background: 'black', color: "white" }}>
                            Search
                        </Button>

                        <Grid item md="8" xs={6} sm={6} textAlign={"right"}>
                            <ExportToExcel />

                        </Grid>
                    </Grid>

                </Grid>
            </form><br />
            <Card>
                <Typography style={{ padding: "10px", background: "gainsboro" }} textAlign={"left"} variant="h6" gutterBottom>
                    <b>Real Time Logs</b>
                </Typography>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    onPaginationModelChange={handlePaginationModelChange}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection={false} // Set checkboxSelection to false
                    disableSelectionOnClick
                    getRowId={getRowId}
                    paginationMode="server"

                />
            </Card>
        </div>
    );
};

export default LogTable;