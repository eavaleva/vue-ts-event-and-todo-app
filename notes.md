## Lesson 06 ## 

What is a type assertion? 

A type assertion is essentially overriding a type by using the keyword "AS" 

## Lesson 07 ##  

### Apply custom types to props ### 

#### What is a Generic? #### 
Means that you can create a function that is reusable over different types eg. string, array, number, boolean, and so on.


`example`

function createList <CustomType> (item: <CustomType>): CustomType[] {
    const newList: CustomType[] = []
    newList.push(item)
    return newList 
}
const numberList = createList<number>(123)
const stringList = 


## Lesson 08 ##  

### Computed Properties with Custom Types ### 
The key thing to rememebr is to focus on typing what you expect to return. 


### Custom Types with Methods ###
Similarly to Computed Properties, in Methods you focus ot the type you expect to 
2 keys things to rememebr

1st, whether or not you need to type the parameters that are being passed to the method.`addEvent(newEvent: EventItem)`
2nd, what if we need to return an actual event from the method?  All we need to do is add a colen and add the type we want to return. `secondEvent(): EventITem {return this.events[1]}`

`example 1` 
export default defineComponent ({
    data() {
        return {
            evenets: [] as EventItem[]
        }
    },
    methods: {
        // this si how you define ene type inside a method 
        addEvent(newEvent: EventItem) {
            this.events.push(newEvent)
        }
    }
}) 
`example 2` 
export default defineComponent ({
    data() {
        return {
            evenets: [] as EventItem[]
        }
    },
    methods: {
            secondEvent(): EventITem {
                return this.events[1]
            }
        }
}) 
