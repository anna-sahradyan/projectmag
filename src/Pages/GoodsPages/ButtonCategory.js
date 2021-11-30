import React from 'react';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const ButtonCategory = ({filterCategory,filterItem,category}) => {
    return (
        <>


            <Box sx={{ width: '100%', bgColor: 'background.paper' }}>
                <Tabs value={filterCategory}   onClick={()=>filterItem(category)} >
                    <Tab label={category} value={filterCategory}/>
                </Tabs>
            </Box>
        </>
    );
};

export default ButtonCategory;