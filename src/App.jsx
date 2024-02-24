function App() {
  return (
    <>
      <h2>1.Font Family</h2>
      <div className="w-full">
        <p className="font-sans">The quick brown fox</p>
        <p className="font-serif">The quick brown fox</p>
        <p className="font-mono">The quick brown fox</p>
        <p className="font-bold">The quick brown fox</p>
      </div>
      <br />
      <hr />

      <h2>2.Hover</h2>
      <p className="font-sans hover:font-bold">FIX GACOR</p>
      <br />
      <hr />

      <h2>3.Font Size</h2>
      <p className="text-sm">The quick brown fox</p>
      <p className="text-base">The quick brown fox</p>
      <p className="text-lg">The quick brown fox</p>
      <p className="text-xl">The quick brown fox</p>
      <p className="text-2xl">The quick brown fox</p>
      <p className="text-[50px]">The quick brown fox(Custom)</p>
      <br />
      <hr />

      <h2>4.Italic</h2>
      <p className="italic">The quick brown fox</p>
      <p className="not-italic">The quick brown fox</p>
      <br />
      <hr />

      <h2>5.Font Weight</h2>
      <p className="font-light">The quick brown fox</p>
      <p className="font-normal">The quick brown fox</p>
      <p className="font-medium">The quick brown fox</p>
      <p className="font-semibold">The quick brown fox</p>
      <p className="font-bold">The quick brown fox</p>
      <br />
      <hr />

      <h2>6.Letter Spacing</h2>
      <p className="tracking-tighter">The quick brown fox</p>
      <p className="tracking-normal">The quick brown fox</p>
      <p className="tracking-widest">The quick brown fox</p>
      <br />
      <hr />

      <h2>7.Line Height</h2>
      <p className="leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione
        laboriosam voluptatum similique ad explicabo. Vel quisquam, culpa
        suscipit corporis aspernatur distinctio provident cumque eligendi illum
        nemo dicta! Dolores, temporibus.
      </p>
      <br />
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione
        laboriosam voluptatum similique ad explicabo. Vel quisquam, culpa
        suscipit corporis aspernatur distinctio provident cumque eligendi illum
        nemo dicta! Dolores, temporibus.
      </p>
      <br />
      <p className="leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione
        laboriosam voluptatum similique ad explicabo. Vel quisquam, culpa
        suscipit corporis aspernatur distinctio provident cumque eligendi illum
        nemo dicta! Dolores, temporibus.
      </p>
      <br />
      <br />
      <hr />

      <h2>8.Text Align</h2>
      <p className="text-right">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nulla
        sit dolores beatae. Vel beatae facere dolorem, doloremque dicta cumque
        nostrum culpa ullam, quod, soluta sunt possimus numquam velit odio.
      </p>
      <br />
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nulla
        sit dolores beatae. Vel beatae facere dolorem, doloremque dicta cumque
        nostrum culpa ullam, quod, soluta sunt possimus numquam velit odio.
      </p>
      <br />
      <p className="text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nulla
        sit dolores beatae. Vel beatae facere dolorem, doloremque dicta cumque
        nostrum culpa ullam, quod, soluta sunt possimus numquam velit odio.
      </p>
      <br />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nulla
        sit dolores beatae. Vel beatae facere dolorem, doloremque dicta cumque
        nostrum culpa ullam, quod, soluta sunt possimus numquam velit odio.
      </p>
      <br />
      <br />
      <hr />

      <h2>9.Text Color</h2>
      <p className="text-sky-300">The quick brown fox</p>
      <p className="text-sky-400">The quick brown fox</p>
      <p className="text-sky-500">The quick brown fox</p>
      <p className="text-sky-600">The quick brown fox</p>
      <p className="text-sky-700">The quick brown fox</p>
      <p className="text-sky-800">The quick brown fox</p>
      <p className="text-sky-900 hover:text-purple-500">The quick brown fox</p>
      <br />
      <hr />

      <h2>10.Text Decoration</h2>
      <p className="underline">The quick brown fox</p>
      <p className="overline">The quick brown fox</p>
      <p className="line-through">The quick brown fox</p>
      <p className="no-underline ">The quick brown fox</p>
      <br />
      <hr />

      <h2>11.Text Underline Style</h2>
      <p className="underline decoration-solid">The quick brown fox</p>
      <p className="underline decoration-double">The quick brown fox</p>
      <p className="underline decoration-dotted">The quick brown fox</p>
      <p className="underline decoration-dashed">The quick brown fox</p>
      <p className="underline decoration-wavy">The quick brown fox</p>
      <br />
      <hr />

      <h2>12.Background</h2>
      <div className="bg-indigo-500">Background Color</div>
      <div className="bg-rose-500">Background Color</div>
      <div className="bg-teal-500">Background Color</div>
      <br />
      <hr />

      <h2>13.Width</h2>
      <div className="w-full bg-indigo-300">w-full</div>
      <div className="w-96 bg-indigo-400">w-96</div>
      <div className="w-80 bg-indigo-500">w-80</div>
      <div className="w-64 bg-indigo-600">w-64</div>
      <div className="w-48 bg-indigo-700">w-48</div>
      <div className="w-40 bg-indigo-800">w-40</div>
      <div className="w-32 bg-indigo-900 text-gray-50">w-32</div>
      <div className="w-24 bg-indigo-950 text-gray-50">w-24</div>
      <div className="w-[500px] bg-indigo-500">w-custom</div>
      <br />
      <hr />

      <h2>14.Height</h2>
      <div className="h-96 w-96 bg-indigo-300">h-96</div>
      <div className="h-80 w-80 bg-indigo-400">h-80</div>
      <div className="h-64 w-64 bg-indigo-500">h-64</div>
      <div className="h-48 w-48 bg-indigo-600">h-48</div>
      <div className="h-40 w-40 bg-indigo-700">h-40</div>
      <div className="h-32 w-32 bg-indigo-800">h-32</div>
      <div className="h-screen w-screen bg-indigo-800">Dymnamic Resolution</div>
      <div className="h-[100px] w-24 bg-indigo-900 text-gray-50">h-custom</div>
      <br />
      <hr />

      <h2>15.Justify Content + Gap</h2>
      <div className="flex justify-start bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <div className="flex justify-center bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <div className="flex justify-end bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <div className="flex justify-between bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <hr />

      <h2>16.Padding</h2>
      <div className="pt-6 bg-slate-500">pt-6</div>
      <div className="pr-4 bg-rose-500">pr-4</div>
      <div className="pb-8 bg-indigo-500">pb-8</div>
      <div className="pl-2 bg-teal-500">pl-2</div>
      <div className="py-2 bg-sky-500">py-2</div>
      <div className="px-2 bg-gray-500">px-2</div>
      <div className="p-[50px] bg-purple-500">padding custom</div>
      <br />
      <hr />

      <h2>17.Margin</h2>
      <div className="mt-6 bg-slate-500">mt-6</div>
      <div className="mr-4 bg-rose-500">mr-4</div>
      <div className="mb-8 bg-indigo-500">mb-8</div>
      <div className="ml-2 bg-teal-500">ml-2</div>
      <div className="my-2 bg-sky-500">my-2</div>
      <div className="mx-2 bg-gray-500">mx-2</div>
      <div className="m-[50px] bg-purple-500">margin custom</div>
      <br />
      <hr />

      <h2>18.Borders</h2>
      <div className="rounded w-40 text-center border-2 border-rose-500">
        Rounded
      </div>
      <div className="rounded-md w-40 text-center border-4 border-purple-500">
        Rounded md
      </div>
      <div className="rounded-lg w-40 text-center border-2 border-yellow-500">
        Rounded lg
      </div>
      <div className="rounded-full w-40 text-center border-8 border-teal-500">
        Rounded full
      </div>
      <div className="rounded-[100px] w-40 text-center border-[3px] border-sky-500">
        Rounded custom
      </div>
      <br />
      <hr />

      <h2>19.Flex</h2>
      <div className="flex">
        <div className="flex-none w-14 h-14 bg-sky-500">flex-name</div>
        <div className="flex-initial w-64 bg-violet-500">flex-initial</div>
        <div className="flex-auto w-32 bg-teal-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque,
          corporis consequatur dicta magni illo cumque quos iure, obcaecati
          harum numquam quis hic mollitia alias. Dolore iure dicta deleniti
          dignissimos.
        </div>
      </div>
      <br />
      <hr />

      <h2>20.Cursor</h2>
      <button
        type="button"
        className="cursor-pointer bg-rose-500 p-2 rounded-md"
      >
        Submit
      </button>
      <br />
      <br />

      <button
        type="button"
        className="cursor-progress bg-sky-500 p-2 rounded-md"
      >
        Saving
      </button>
      <br />
      <br />

      <button
        type="button"
        className="cursor-not-allowed bg-yellow-500 p-2 rounded-md"
      >
        Confirm
      </button>
      <br />
      <br />
      <hr />

      <h2>21.Shadow</h2>
      <div className="bg-red-500 shadow-md shadow-red-500/50 w-40 text-center rounded-xl py-2">
        Subscribe
      </div>
      <br />
      <div className="bg-green-500 shadow-lg shadow-green-500/50 w-40 text-center rounded-xl py-2">
        Like
      </div>
      <br />
      <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 w-40 text-center rounded-xl py-2">
        Share
      </div>
      <br />
      <hr />

      <h2>22.Display</h2>
      <div>
        When controlling the flow of text, using the CSS Property
        <span className="inline bg-stone-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolorum laborum culpa facilis nesciunt, dolore dicta expedita,
          corrupti tempora ducimus quasi magni vitae, consectetur dolorem cumque
          quos perferendis in at.
        </span>
        Will cause the text inside the element to wrap normally.
      </div>
      <br />
      <div>
        When controlling the flow of text, using the CSS Property
        <span className="inline-block bg-slate-500">
          display: block - Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Excepturi dolorum laborum culpa facilis nesciunt, dolore dicta
          expedita, corrupti tempora ducimus quasi magni vitae, consectetur
          dolorem cumque quos perferendis in at.
        </span>
        Will cause the text inside the element to wrap normally
      </div>
      <br />
      <div>
        Lastly, using the property{" "}
        <span className="block bg-green-300">
          display: block - lorem ipsum dolor sit amet consectetur adipisicing
          elit. Excepturi dolorum laborum culpa facilis nesciunt, dolore dicta
          expedita, corrupti tempora ducimus quasi magni vitae, consectetur
          dolorem cumque quos perferendis in at.
        </span>
        Will get the element on its own and fill its parent.
      </div>
      <br />



    </>
  );
}

export default App;