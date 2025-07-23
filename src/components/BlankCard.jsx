function BlankCard() {
    return (
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
    );
}

export default BlankCard;