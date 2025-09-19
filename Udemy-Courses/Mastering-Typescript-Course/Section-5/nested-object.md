# Annotating Nested object properties
- Its the same logic tunnel for regular objects!

```tsx
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string;
    }
}

const mySong: Song = {
    title: "Unchained",
    artist: "Righteous Postage",
    numStreams: 6342163,
    credits: {
        producer: "Kumanroy Jet",
        writer: "Roman Tiles"
    }
};

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song) :void {
    console.log(`Song: ${song.title} - Artist: ${song.artist}`);
}

console.log(calculatePayout(mySong));
console.log(printSong(mySong));
