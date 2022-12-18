import app from "renderer/redux/slices/app";
import battery from "renderer/redux/slices/battery";
import cpu from "renderer/redux/slices/cpu";
import general from "renderer/redux/slices/general";
import system from "renderer/redux/slices/system";

const rootReducer = { app, battery, cpu, general, system };

export default rootReducer;
