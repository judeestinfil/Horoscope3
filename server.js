const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const date = require('date-fns')
var format = require('date-fns/format')
var add = require('date-fns/add')
var newdate = format(new Date(), 'MMMM dd, yyyy')

app.use(cors())
app.use(express.static('public'))

const zodiacs = {
    'aries':{
        'todays_date': newdate,
        'date_range':'March 21 - April 19',
        'planet':'Mars',
        'day':'Tuesday',
        'color':'Red or Burgundy',
        'number':'2',
        'gemstones':'Red Coral, Garnet',
        'herbs': 'Rompe Saraguey, Quita Maldicion, Pine, Tobacco, Cedarwood'
    },
    'taurus':{
        'todays_date': newdate,
        'date_range':'April 20 - May 20',
        'planet':'Venus',
        'day':'Friday',
        'color':'Green or Yellow',
        'number':'5',
        'gemstones':'Diamond',
        'herbs': 'Yellow Roses, Calendula Flowers, Parsley, Cinnamon, Sandalwood, Maidens Hair'
    },
    'gemini':{
        'todays_date': newdate,
        'date_range':'May 21 - June 21',
        'planet':'Mercury',
        'day':'Wednesday',
        'color':'Orange',
        'number':'3',
        'gemstones':'Emerald',
        'herbs': 'Abre Camino, Arrasa con todo, Oregano, Lavender, Lakespur, Lilly of the Valley'
    },
    'cancer':{
        'todays_date': newdate,
        'date_range':'June 22 - July 23',
        'planet':'Moon',
        'day':'Monday',
        'color':'Light Blue',
        'number':'1',
        'gemstones':'Pearl, Moonstone',
        'herbs': 'Spearmint, Lettuce, Purslane'
    },
    'leo':{
        'todays_date': newdate,
        'date_range':'July 23 - August 22',
        'planet':'Sun',
        'day':'Sunday',
        'color':'Pink',
        'number':'7',
        'gemstones':'Rose Quartz',
        'herbs': 'Olibanum, Poplar Leaves, Paraiso, Cocks Comb, Geranium, Bay Leaves, Vencedor'
    },
    'virgo':{
        'todays_date': newdate,
        'date_range':'August 23 - September 22',
        'planet':'Mercury',
        'day':'Wednesday',
        'color':'Orange',
        'number':'3',
        'gemstones':'Emerald',
        'herbs': 'Abre Camino, Arrasa con todo, Oregano, Lavender, Lakespur, Lilly of the Valley'
    },
    'libra':{
        'todays_date': newdate,
        'date_range':'September 23 - October 22',
        'planet':'Venus',
        'day':'Friday',
        'color':'Greenn or Yellow',
        'number':'5',
        'gemstones':'Diamond',
        'herbs': 'Yellow Roses, Calendula Flowers, Parsley, Cinnamon, Sandalwood, Maidens Hair'
    },
    'scorpio':{
        'todays_date': newdate,
        'date_range':'October 23 - November 22',
        'planet':'Mars',
        'day':'Tuesday',
        'color':'Red or Burgundy',
        'number':'2',
        'gemstones':'Red Coral, Garnet',
        'herbs': 'Rompe Saraguey, Quita Maldicion, Pine, Tobacco, Cedarwood'
    },
    'saggitarius':{
        'todays_date': newdate,
        'date_range':'November 23 - December 21',
        'planet':'Jupiter',
        'day':'Thursday',
        'color':'Royal Blue',
        'number':'4',
        'gemstones':'Blue sapphire, Lapis Lazuli',
        'herbs': 'Thuja, Anis, Honeysuckle, Oak Moss'
    },
    'capricorn':{
        'todays_date': newdate,
        'date_range':'December 22 - January 19',
        'planet':'Saturn',
        'day':'Saturday',
        'color':'Black and/or Purple',
        'number':'6',
        'gemstones':'Onyx',
        'herbs': 'Myrrh, Cypress, Southern Leaves'
    },
    'aquarius':{
        'todays_date': newdate,
        'date_range':'January 20 - February 18',
        'planet':'Saturn',
        'day':'Saturday',
        'color':'Black and/or Purple',
        'number':'6',
        'gemstones':'Onyx',
        'herbs': 'Myrrh, Cypress, Southern Leaves'
    },
    'pisces':{
        'todays_date': newdate,
        'date_range':'February 19 - March 20',
        'planet':'Jupiter',
        'day':'Thursday',
        'color':'Royal Blue',
        'number':'4',
        'gemstones':'Blue sapphire, Lapis Lazuli',
        'herbs': 'Thuja, Anis, Honeysuckle, Oak Moss'
    },
    'unknown':{
        'todays_date': newdate,
        'date_range':'unknown',
        'planet':'unknown',
        'day':'unknown',
        'color':'unknown',
        'number':'unknown',
        'gemstones':'unknown',
        'herbs': 'unknown'
    }
}
function giveMeFive(zodiacs) {
    for (var value in zodiacs) {
      if (value === newdate) console.log(value);
    //   if (obj[key].length === 5) five.push(obj[key]);
    }
}
app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:zodiacsName', (request, response)=>{
    const zodiacsName = request.params.zodiacsName.toLowerCase()
    if(zodiacs[zodiacsName]){
        response.json(zodiacs[zodiacsName])
    }else{
        response.json(zodiacs['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})