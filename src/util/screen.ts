const MAXIMUM_MOBILE_WIDTH = 1023;

export const isMobile = (): boolean => {
    return window.innerWidth <= MAXIMUM_MOBILE_WIDTH;
}