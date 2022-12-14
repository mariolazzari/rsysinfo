import battery from 'renderer/views/Battery/reducer';
import cpu from 'renderer/views/Cpu/reducer';
import general from 'renderer/views/General/reducer';
import system from 'renderer/views/System/reducer';

const rootReducer = { battery, cpu, general, system };

export default rootReducer;
