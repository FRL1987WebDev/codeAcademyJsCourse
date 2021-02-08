const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
      case 'monday':
      return 8
      break;
      case 'tuesday':
      return 8
      break;
      case 'wednesday':
      return 8
      break;
      case 'thursday':
      return 8
      break;
      case 'friday':
      return 8
      break;
      case 'saturday':
      return 8
      break;
      case 'sunday':
      return 8
      break;
      default :
      return 'Error'
      break;
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
  
  console.log(getActualSleepHours());
  
  
  const getIdealSleepHours = () => {
    const idealHours = 8; 
    return idealHours * 7;
  }
  
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return "You got the perfect amount of sleep!"
    } else if (actualSleepHours < idealSleepHours) {
      return "You didn't get enough sleep!"
    } else {
      return "You slept too much lazy lump!"
    }
  }
  
  console.log(calculateSleepDebt());
    