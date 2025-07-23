import Card from '@mui/material/Card';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function SelectableCard(props) {
    const { title, description, image, defaultImage } = props;
    const [show, setShow] = useState(false);

    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => setShow(!show)}>
        <CardMedia
          component="img"
          height="200"
          image={show ? image : defaultImage}
          alt={title}
          sx={{
            objectFit: 'contain',
            objectPosition: 'center',
            width: '100%',
            height: '200px',
            backgroundColor: 'grey.100',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
    );
  }

  export default SelectableCard;