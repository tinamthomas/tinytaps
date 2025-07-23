import Card from '@mui/material/Card';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function SelectableCard(props) {
    const { title, description, image } = props;
    const [show, setShow] = useState(false);

    return (
    <Card 
      className={`custom-card ${show ? 'card-flip' : ''}`}
      sx={{ 
        width: '100%',
        height: 400,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardActionArea 
        onClick={() => setShow(!show)}
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'stretch'
        }}
      > 
        {show ? (
          <CardMedia
            component="img"
            height="220"
            image={image}
            alt={title}
            sx={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '220px',
              flexShrink: 0,
              transition: 'all 0.3s ease',
              filter: 'brightness(1.1) saturate(1.1)',
            }}
          />
        ) : (
          <div
            sx={{
              width: '100%',
              height: '220px',
              flexShrink: 0,
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc',
              backgroundImage: `
                linear-gradient(45deg, #e2e8f0 25%, transparent 25%), 
                linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, #e2e8f0 75%), 
                linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)
              `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
            }}
            style={{
              width: '100%',
              height: '220px',
              flexShrink: 0,
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc',
              backgroundImage: `
                linear-gradient(45deg, #e2e8f0 25%, transparent 25%), 
                linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, #e2e8f0 75%), 
                linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)
              `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
            }}
          />
        )}
        <CardContent sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          minHeight: '180px',
          padding: '1.5rem'
        }}>
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