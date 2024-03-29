import { HtmlHTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from "class-variance-authority"
import { cn } from '../../lib/utils'

const headingVariants = cva(
    'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
    {
        variants: {
            size: {
                default: "text-4xl mf:text:5xl lg:text-6xl",
                lg: "text-5xl mf:text:6xl lg:text-7xl",
                sm: "text-2xl mf:text:3xl lg:text-4xl"
            },
        },
        defaultVariants: {
            size: "default"
        }
    }
)

interface LargeHeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> { }

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({
    className, size, children, ...props }, ref) => {
    return (
        <h1
            ref={ref}
            {...props}
            className={cn(headingVariants({ size, className }))}>
            {children}
        </h1>
    )
})

LargeHeading.displayName = "LargeHeading"

export default LargeHeading