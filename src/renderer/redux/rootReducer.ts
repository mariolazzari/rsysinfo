import battery from 'renderer/components/Battery/reducer';
import cpu from '../components/Cpu/reducer';
import general from '../components/General/reducer';

const rootReducer = { battery, cpu, general };

export default rootReducer;
