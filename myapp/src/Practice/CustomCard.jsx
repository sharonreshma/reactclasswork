import React from "react";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from '@mui/material/CardActions';
import Tree from '../Assets/Tree.jpg';
export default function CustomCard(){
    return(
    <Card sx={{maxWidth:345}}>
        <CardMedia sx={{height:140}} image={Tree} title="Tree"/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Nature
            </Typography>
            <Typography variant="body2" color="text.secondary">
                embrace natyres beauty
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    )
}