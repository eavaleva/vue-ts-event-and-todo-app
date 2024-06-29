
/** 
 * This is an example of defining types in TypeScript
 */
type TaskType = 'personal' | 'work' | 'miscellaneous'
type buttonType = 'primary' | 'secondary' | 'success' | 'error'

/**
 * Define types  in Typesript looks like the following
 */
export interface EventItem {
    id: number;
    catergory: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    organizer: string;
}



export interface TodoItem {
  label: string;
  type: TaskType;
  isComplete: boolean;
}

type TaskType = 'personal' | 'work' | 'miscellaneous'
type buttonType = 'primary' | 'secondary' | 'success' | 'error'


// ** If you want to define Objects, it is best to use interfaces instead of types */

