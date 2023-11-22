import React from 'react';
import * as ExcelJS from 'exceljs';
import { Button } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
const ExportToExcel = ({ data, columns, fileName }) => {
  const exportToExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    // Add header row
    const headerRow = worksheet.addRow(columns.map(column => column.label));

    // Add data rows
    data.forEach(row => {
      const values = columns.map(column => row[column.id]);
      console.log(values);
      worksheet.addRow(values);
    });

    // Generate Excel file
    workbook.xlsx.writeBuffer().then(buffer => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);

      // Create a link and trigger a click to download the file
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  return (
    <Button onClick={exportToExcel} variant='outlined'>CSV &nbsp;<ArrowCircleDownIcon/></Button>
  );
};

export default ExportToExcel;