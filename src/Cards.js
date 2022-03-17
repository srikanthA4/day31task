import { useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
// getting all the props and destructuring
export function Cards({
  name,
  power,
  weakness,
  img,
  description,
  editbutton,
  deleteButton,
}) {
  const [style, setStyle] = useState(" ");
  const changecolor = { color: style };
  return (
    <div>
      {/* react MUI card  */}
      <Card className="card">
        <CardMedia component="img" image={img} alt={name} />
        <CardContent>
          <div className="basics">
            <Typography variant="h6" gutterBottom component="div">
              {name}
            </Typography>
            <IconButton
              size="small"
              onClick={() => {
                setStyle(style === "red" ? "black" : "red");
              }}
              style={changecolor}
              aria-label="like"
            >
              <FavoriteIcon />
            </IconButton>
            <Chip color="success" label={power} />
            <Chip color="warning" label={weakness} />
            {deleteButton}
            {editbutton}
          </div>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}