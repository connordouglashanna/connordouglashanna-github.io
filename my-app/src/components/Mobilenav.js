import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure
  } from "@chakra-ui/react"
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon
  } from "@chakra-ui/icons"

  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map(navItem => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    )
  }