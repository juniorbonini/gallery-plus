export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
) {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function(...args: Parameters<T>): void {
        const later = () => {
            const timeout = null;
            func(...args)
        }

        if(timeout !== null) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(later, wait);
    }
 }