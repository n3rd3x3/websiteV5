import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        "&:hover": {
            fill: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 750 750"
            className={classes.svgHover}
        >
            <g transform="translate(266.64544, 275.474538)"><g><path d="M 109.203125 -134.65625 C 119.117188 -134.65625 128.890625 -133.507812 138.515625 -131.21875 C 148.140625 -128.9375 157.332031 -125.554688 166.09375 -121.078125 C 174.863281 -116.597656 182.628906 -110.640625 189.390625 -103.203125 C 196.160156 -95.773438 199.832031 -86.914062 200.40625 -76.625 L 200.40625 -15.71875 C 199.257812 -4.289062 192.972656 1.898438 181.546875 2.859375 C 176.203125 2.859375 171.578125 1.097656 167.671875 -2.421875 C 163.765625 -5.953125 161.8125 -10.382812 161.8125 -15.71875 L 161.8125 -67.75 C 161.425781 -73.664062 159.1875 -78.578125 155.09375 -82.484375 C 151 -86.390625 146.425781 -89.484375 141.375 -91.765625 C 136.320312 -94.054688 131.078125 -95.769531 125.640625 -96.90625 C 120.210938 -98.050781 114.734375 -98.625 109.203125 -98.625 C 103.679688 -98.625 98.203125 -98.050781 92.765625 -96.90625 C 87.335938 -95.769531 82.097656 -94.054688 77.046875 -91.765625 C 71.992188 -89.484375 67.414062 -86.390625 63.3125 -82.484375 C 59.21875 -78.578125 56.984375 -73.664062 56.609375 -67.75 L 56.609375 -15.71875 C 55.648438 -4.289062 49.453125 1.898438 38.015625 2.859375 C 32.679688 2.859375 28.0625 1.097656 24.15625 -2.421875 C 20.25 -5.953125 18.296875 -10.382812 18.296875 -15.71875 L 18.296875 -76.625 C 18.867188 -86.914062 22.488281 -95.773438 29.15625 -103.203125 C 35.832031 -110.640625 43.550781 -116.597656 52.3125 -121.078125 C 61.082031 -125.554688 70.28125 -128.9375 79.90625 -131.21875 C 89.53125 -133.507812 99.296875 -134.65625 109.203125 -134.65625 Z M 109.203125 -134.65625 "/></g></g>
            <g transform="translate(265.891532, 413.939414)"><g><path d="M 20.015625 -20.296875 C 20.015625 -25.628906 21.921875 -30.109375 25.734375 -33.734375 C 29.347656 -37.546875 33.828125 -39.453125 39.171875 -39.453125 L 154.671875 -39.453125 C 158.285156 -39.640625 161.285156 -40.492188 163.671875 -42.015625 C 166.054688 -43.546875 167.816406 -45.265625 168.953125 -47.171875 C 170.097656 -49.078125 170.671875 -51.078125 170.671875 -53.171875 C 170.671875 -55.265625 170.097656 -57.265625 168.953125 -59.171875 C 167.816406 -61.078125 166.054688 -62.789062 163.671875 -64.3125 C 161.285156 -65.84375 158.285156 -66.703125 154.671875 -66.890625 L 39.734375 -66.890625 C 34.398438 -66.890625 29.921875 -68.796875 26.296875 -72.609375 C 22.484375 -76.234375 20.578125 -80.710938 20.578125 -86.046875 C 20.578125 -91.390625 22.4375 -95.914062 26.15625 -99.625 C 29.875 -103.34375 34.398438 -105.203125 39.734375 -105.203125 L 152.953125 -105.203125 C 153.140625 -105.203125 153.328125 -105.203125 153.515625 -105.203125 C 157.140625 -105.398438 160.140625 -106.210938 162.515625 -107.640625 C 164.898438 -109.066406 166.664062 -110.734375 167.8125 -112.640625 C 168.957031 -114.546875 169.53125 -116.546875 169.53125 -118.640625 C 169.53125 -120.546875 168.957031 -122.453125 167.8125 -124.359375 C 166.664062 -126.265625 164.898438 -127.929688 162.515625 -129.359375 C 160.140625 -130.796875 157.140625 -131.609375 153.515625 -131.796875 L 38.59375 -131.796875 C 33.257812 -131.796875 28.78125 -133.703125 25.15625 -137.515625 C 21.34375 -140.941406 19.4375 -145.320312 19.4375 -150.65625 C 19.4375 -155.800781 21.296875 -160.1875 25.015625 -163.8125 C 28.734375 -167.4375 33.257812 -169.25 38.59375 -169.25 L 151.8125 -169.25 C 165.144531 -169.050781 176.144531 -166.140625 184.8125 -160.515625 C 193.488281 -154.898438 199.6875 -148.375 203.40625 -140.9375 C 207.125 -133.507812 208.984375 -126.078125 208.984375 -118.640625 C 208.984375 -111.210938 207.078125 -103.875 203.265625 -96.625 C 201.546875 -93.195312 199.351562 -90.054688 196.6875 -87.203125 C 199.925781 -83.765625 202.597656 -80.140625 204.703125 -76.328125 C 208.316406 -68.703125 210.125 -60.984375 210.125 -53.171875 C 210.125 -45.742188 208.21875 -38.265625 204.40625 -30.734375 C 200.59375 -23.203125 194.398438 -16.53125 185.828125 -10.71875 C 177.253906 -4.90625 166.296875 -1.804688 152.953125 -1.421875 L 151.234375 -1.421875 C 150.085938 -1.234375 148.941406 -1.140625 147.796875 -1.140625 L 39.171875 -1.140625 C 33.828125 -1.140625 29.296875 -3 25.578125 -6.71875 C 21.867188 -10.4375 20.015625 -14.960938 20.015625 -20.296875 Z M 20.015625 -20.296875 "/></g></g>
            <g transform="translate(268.797782, 541.252376)"><g><path d="M 24.015625 -94.34375 C 27.640625 -103.488281 33.785156 -111.726562 42.453125 -119.0625 C 51.128906 -126.40625 62.132812 -130.171875 75.46875 -130.359375 L 182.96875 -130.359375 C 188.300781 -130.359375 192.78125 -128.453125 196.40625 -124.640625 C 200.21875 -121.023438 202.125 -116.546875 202.125 -111.203125 C 202.125 -105.867188 200.265625 -101.34375 196.546875 -97.625 C 192.828125 -93.914062 188.300781 -92.0625 182.96875 -92.0625 L 74.328125 -92.0625 C 70.710938 -92.0625 67.566406 -90.582031 64.890625 -87.625 C 62.222656 -84.664062 60.175781 -81.1875 58.75 -77.1875 C 57.320312 -73.1875 56.609375 -69.375 56.609375 -65.75 L 56.609375 -15.71875 C 55.460938 -4.289062 49.171875 1.898438 37.734375 2.859375 C 32.398438 2.859375 27.78125 1.097656 23.875 -2.421875 C 19.96875 -5.953125 18.015625 -10.382812 18.015625 -15.71875 L 18.015625 -65.46875 L 18.296875 -65.46875 C 18.296875 -75.375 20.203125 -85 24.015625 -94.34375 Z M 24.015625 -94.34375 "/></g></g>
            <g transform="translate(257.219657, 655.474558)"><g><path d="M 177.25 -155.234375 C 178.394531 -166.671875 184.6875 -172.867188 196.125 -173.828125 C 201.457031 -173.828125 206.078125 -172.0625 209.984375 -168.53125 C 213.890625 -165.007812 215.84375 -160.578125 215.84375 -155.234375 L 215.84375 -19.15625 C 215.65625 -13.820312 213.65625 -9.390625 209.84375 -5.859375 C 206.03125 -2.335938 201.457031 -0.578125 196.125 -0.578125 L 76.046875 -0.578125 C 59.273438 -1.140625 46.597656 -5.085938 38.015625 -12.421875 C 29.441406 -19.765625 23.25 -28.054688 19.4375 -37.296875 C 15.625 -46.546875 13.71875 -55.9375 13.71875 -65.46875 C 13.71875 -75.375 15.578125 -84.945312 19.296875 -94.1875 C 23.015625 -103.4375 29.207031 -111.726562 37.875 -119.0625 C 46.550781 -126.40625 57.5625 -130.171875 70.90625 -130.359375 L 142.9375 -130.359375 C 148.28125 -130.359375 152.757812 -128.453125 156.375 -124.640625 C 160.1875 -121.023438 162.09375 -116.546875 162.09375 -111.203125 C 162.09375 -105.867188 160.234375 -101.34375 156.515625 -97.625 C 152.804688 -93.914062 148.28125 -92.0625 142.9375 -92.0625 L 69.75 -92.0625 C 66.132812 -92.0625 62.988281 -90.582031 60.3125 -87.625 C 57.644531 -84.664062 55.691406 -81.234375 54.453125 -77.328125 C 53.222656 -73.421875 52.609375 -69.5625 52.609375 -65.75 C 52.609375 -61.75 53.222656 -57.796875 54.453125 -53.890625 C 55.691406 -49.984375 57.644531 -46.550781 60.3125 -43.59375 C 62.988281 -40.644531 66.132812 -39.070312 69.75 -38.875 L 169.8125 -38.875 C 174.769531 -39.070312 177.25 -41.550781 177.25 -46.3125 Z M 177.25 -155.234375 "/></g></g>
        </svg>
    );
};
