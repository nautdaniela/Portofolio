const RainStream = () => {
    return (
        <div 
        style={{
            color:'#20c20e',
            writingMode:'vertical-rl',
            textOrientation:'upright',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            textShadow: '0px 0px 8px rgba(32,194,14,0.8)',
            fontSize: 50,
        }}>
            {'test'.split('').map(char => (
                <p
                    style = {{
                    marginTop: -12,
                    }}>
                    {char}
                </p>
            ))}
        </div>
    );
};
export default RainStream;