import battery from 'renderer/views/Battery/reducer';
import cpu from '../views/Cpu/reducer';
import general from '../views/General/reducer';

const rootReducer = { battery, cpu, general };

export default rootReducer;
