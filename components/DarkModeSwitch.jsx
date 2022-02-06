import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon,StarIcon} from "@chakra-ui/icons"

const DarkModeSwitch = () =>{
    const {colorMode,toggleColorMode} = useColorMode()
    const iconColor = {
        light:'gray.700',
        dark: 'white'
    }
    return (
        <IconButton 
            bg="transparent"
            aria-label="Toggle dark Mode"
            icon={colorMode==='dark'? <SunIcon className='text-2xl'/>:<StarIcon className='text-2xl' />}
            onClick={toggleColorMode}
            className='hover:text-green-600 text-4xl'
            // style={{position:'absolute', top:'0px'}}
            id="darkMode"
            size="lg"
            color={iconColor[colorMode]}
        />
    )
}

export default DarkModeSwitch