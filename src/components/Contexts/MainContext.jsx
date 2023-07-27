import { createContext, useContext, useReducer } from 'react';

const initialData = {
    block_words: ['kpop', 'kdrama'],
    countries_list: ['EU', 'US', 'IN', 'PL', 'SL', 'JP'],
    selected_country: 'IN',
    categories : ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    indian_sources: [],
    loader: false
}
const DataContext = createContext(null);
const DataDispatchContext = createContext(null);

export function DataProvider({ children }){
    const [data, dispatch] = useReducer(
        dataReducer,
        initialData
      );
    return (
        <DataContext.Provider value={data}>
            <DataDispatchContext.Provider value={dispatch}>
                { children }
            </DataDispatchContext.Provider>
        </DataContext.Provider>
    )
}
export function useDataContext(){
    return useContext(DataContext)
}
export function useDataDispatch(){
    return useContext(DataDispatchContext)
}

function dataReducer(data, action){
    switch (action.type) {
        case 'change_country': {
            return {
                ...data,
                selected_country: action.selected_country
            }
        }
        case 'toggle_loader': {
            return {
                ...data,
                loader: action.loader
            }
        }
        case 'update_indian_sources': {
            return {
                ...data,
                indian_sources: action.indian_sources
            }
        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

