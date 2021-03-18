


export function condition(condition : string) : iconConditions | undefined {
    let icon = null

    switch(condition){
        case 'storm':
            return icon ={
                name: 'rainy-outline',
                color: '#1ec9ff'
            };
            break;
        case 'clear_day':
            return icon = {
                name:  'partly-sunny-outline',
                color: '#FFB300'
            }
        case 'rain' : 
            return icon = {
                name: 'rainy-outline',
                color: '#1ec9ff'
            } 
        default:
            return icon ={
                name: 'cloud-outline',
                color: '#1ec9ff'
            }
    }
}

interface iconConditions {
    name: string;
    color: string;
}