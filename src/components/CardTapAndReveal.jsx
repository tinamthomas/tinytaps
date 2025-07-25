import SelectableCard from './SelectableCard';
        import Box from '@mui/material/Box';
        import cards from '../constants/cards';
        
function CardTapAndReveal() {
    return (        
            <>
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
                {cards.map((card, index) => (
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