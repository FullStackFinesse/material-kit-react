import { forwardRef, createContext, useContext, useMemo } from 'react'
import MKBox from 'components/MKBox'
import MKPaginationItemRoot from 'components/MKPagination/MKPaginationItemRoot'

const Context = createContext()

const MKPagination = forwardRef(
  (
    { item, variant, color, size, active, children, placement, ...rest },
    ref,
  ) => {
    const context = useContext(Context)
    const paginationSize = context ? context.size : null
    const paginationProps = useMemo(() => ({ variant, color, size }), [])
    let placementValue = 'flex-end'

    if (placement === 'left') {
      placementValue = 'flex-start'
    } else if (placement === 'center') {
      placementValue = 'center'
    }

    return (
      <Context.Provider value={paginationProps}>
        {item ? (
          <MKPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : 'outlined'}
            color={active ? context.color : 'secondary'}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </MKPaginationItemRoot>
        ) : (
          <MKBox
            display="flex"
            justifyContent={placementValue}
            alignItems="center"
            sx={{ listStyle: 'none' }}
          >
            {children}
          </MKBox>
        )}
      </Context.Provider>
    )
  },
)

// Setting default values for the props of MKPagination
MKPagination.defaultProps = {
  item: false,
  variant: 'gradient',
  color: 'info',
  size: 'medium',
  active: false,
  placement: 'right',
}

export default MKPagination
