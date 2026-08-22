section .text
global start
start:
    mov ah, 0x09
    mov dx, msg
    int 0x21
    mov ah, 0x4C
    int 0x21

section .data
msg db 'Hello, World!$'