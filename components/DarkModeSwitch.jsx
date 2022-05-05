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
            icon={colorMode==='dark'? <SunIcon className=''/>:<StarIcon  />}
            onClick={toggleColorMode}
            className='hover:text-green-600 '
            style={{position:'relative', top:'3px'}}
            id="darkMode"
            size="sm"
            fontSize={18}
            color={iconColor[colorMode]}
        />
    )
}

export default DarkModeSwitch