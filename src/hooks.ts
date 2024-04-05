import { useState } from "react";

export const useCookie = (name: string): [string | null, (value: string, exMins: number) => void] => {
    const [cookie, setCookieInner] = useState(getCookie(name));

    const setCookie = (value: string, exMins: number): void => {
        const expiry = new Date();
        expiry.setTime(expiry.getTime() + (exMins * 1000 * 60));
        const cookie = `${name}=${value};expires=${expiry.toUTCString()};path=/`;
        document.cookie = cookie;
        setCookieInner(cookie);
    }

    return [cookie, setCookie];
}

const getCookie = (name: string): string | null => {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name.concat("=")) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
}