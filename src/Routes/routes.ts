import { Practice } from '../components/practice/practice';
import { Training } from '../components/training/training';
import { Relief } from './../components/workout/Relief';
import { Muscles } from './../components/workout/Muscles';
import { SlimDown } from './../components/workout/SlimDown';
import { Calculator } from './../components/workout/Calculator';
import { Main } from './../components/main/main';

export interface IAppRoute{
    path:string,
    private:boolean,
    Element:React.FunctionComponent
}


export const AppRoute: IAppRoute[]= [
    {path:'/', private: false, Element: Main},
    {path:'/*', private: false, Element: Main},
    {path:'/workout/SlimDown', private: false,  Element: SlimDown},
    {path:'/workout/Muscles', private: false, Element: Muscles},
    {path:'/workout/Relief', private: false, Element: Relief},
    {path:'/workout/:type/training',private: true,  Element: Training},
    {path:'/workout/timer', private: true, Element: Practice},
    {path:'/workout/Calculator', private: false, Element: Calculator}
]