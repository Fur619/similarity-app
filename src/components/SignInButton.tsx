"use client"

import React, { useState } from 'react'
import { Button } from './ui/Button';
import { signIn } from 'next-auth/react';
import { toast } from './ui/Toast';

const SignInButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const signInWithGoogle = async () => {
        setIsLoading(true)
        try {
            await signIn("google")
        } catch (error) {
            toast({
                title: "Error signing in",
                message: "Please try again later",
                type: "error"
            })
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <Button onClick={signInWithGoogle} isLoading={isLoading}>
            Sign in
        </Button>
    )
}

export default SignInButton