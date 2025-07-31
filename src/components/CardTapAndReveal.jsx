import SelectableCard from './SelectableCard';
import Box from '@mui/material/Box';
import cards from '../constants/cards';
import { TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import { useState } from 'react';

function CardTapAndReveal() {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
    newValue === '1' ? setCurrentCards(cards.animals) : newValue === '2' ? setCurrentCards(cards.vehicles) : setCurrentCards(cards.fruits);
  };
  const [currentCards, setCurrentCards] = useState(cards.animals);
  

  return (        
          <>
              <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example">
                          <Tab label="Animals" value="1" />
                          <Tab label="Vehicles" value="2" />
                          <Tab label="Fruits" value="3" />
                      </TabList>
                  </Box>
              </TabContext>
              <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(auto-fill, minmax(300px, 1fr))',
                sm: 'repeat(auto-fill, minmax(320px, 1fr))',
                md: 'repeat(auto-fill, minmax(320px, 1fr))',
                lg: 'repeat(auto-fill, minmax(350px, 1fr))',
              },
              gap: { xs: 2, sm: 3, md: 3 },
              alignItems: 'stretch',
              justifyItems: 'stretch',
            }}
          >
              {currentCards.map((card, index) => (
                  <SelectableCard 
                    key={card.title} 
                    title={card.title} 
                    description={card.description} 
                    image={card.image} 
                  />
              ))}
              </Box>
          </>
      
  );
}


export default CardTapAndReveal;