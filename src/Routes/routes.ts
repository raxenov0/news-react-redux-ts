import { Practice } from '../components/practice/practice';
import { Training } from '../components/training/training';
import { Relief } from './../components/workout/Relief';
import { Muscles } from './../components/workout/Muscles';
import { SlimDown } from './../components/workout/SlimDown';
import { Calculator } from './../components/workout/Calculator';
import { Main } from './../components/main/main';
export interface IAppRoute{
    path:string,
    Element:React.FunctionComponent
}
export const AppRoute: IAppRoute[]= [
    {path:'/', Element: Main},
    {path:'/*', Element: Main},
    {path:'/workout/SlimDown', Element: SlimDown},
    {path:'/workout/Muscles', Element: Muscles},
    {path:'/workout/Relief', Element: Relief},
    {path:'/workout/:type/training', Element: Training},
    {path:'/workout/timer', Element: Practice},
    {path:'/workout/Calculator', Element: Calculator}
]