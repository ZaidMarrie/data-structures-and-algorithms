import { insertionSort } from "@/lib/sorting/insertion-sort";

async function InsertionSortPage() {
	const seq = [12, 7, 34, 7, 3, 2];
	const n = seq.length;

	const sortedSeq = insertionSort([...seq], n);

	return (
		<main className="flex min-h-screen flex-col items-start justify-start p-24">
			<div className="container max-w-3xl">
				<h1 className="text-4xl font-bold mb-4">Insertion Sort Algorithm</h1>

				<p className="leading-relaxed">
					The INSERTION_SORT procedure is given the sequence{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">
						{JSON.stringify(seq)}
					</code>
					. The procedure takes{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">arr</code> and{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">n</code> as
					parameters. Where{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">arr</code> is the
					sequence of numbers and{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">n</code> is the
					number of values to be sorted.
				</p>

				<p className="mt-4 leading-relaxed">
					The procedure is expected to return the sub-array{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">arr[0 : n]</code>{" "}
					with the original values in{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">arr[0 : n]</code>,
					but in sorted order (ascending order).
				</p>

				<p className="mt-4 leading-relaxed">
					The pseudocode in the code block below represents the algorithm for
					the ISERTION_SORT procedure:
				</p>
				<pre>
					<code className="block bg-slate-900 mt-4 p-4 rounded-sm">
						for (let i = 1 to n) <br />
						{"  "}key = arr[i] <br />
						{"  "}j = i - 1 <br />
						{"  "}## Insert arr[i] in the correct position in arr[0 : i - 1]{" "}
						<br />
						{"  "}while (j &gt;= 0 && arr[j] &gt; key) <br />
						{"    "}arr[j + 1] = arr[j] <br />
						{"    "}j = j - 1 <br />
						{"  "}arr[j + 1] = key
					</code>
				</pre>
				<p className="mt-4 leading-relaxed">
					The sorting procedure above returns the following sequence:{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">
						{JSON.stringify(sortedSeq)}
					</code>
					. The algorithm shows how this algorithm works for an array{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">arr</code> that
					starts with the sequence{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">
						{JSON.stringify(seq)}
					</code>
					. The index{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">i</code> indicates
					the current item being sorted in the current iteration of the for
					loop.
				</p>
				<p className="mt-4 leading-relaxed">
					The <code className="bg-slate-900 pl-1 pr-1 rounded-sm">key</code> is
					what we call the numbers to be sorted in a sequence. Theses{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">keys</code>{" "}
					usually have associated data which we call satellite data. Together
					these keys and satellite data form a record. The{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">key</code>{" "}
					represents the current value being sorted in the sequence. We then
					find the correct position for the{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">key</code>.
				</p>

				<p className="leading-relaxed mt-4">
					In the while loop we move the value of{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">arr[j]</code> (the
					value in the array before the key, index{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">i - 1</code>) to
					the correct position in the sub-array{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">
						arr[0 : i - 1]
					</code>
					. The value of{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">j</code> is
					decremented in each iteration of the while loop. It represents the
					index of the value being moved by one position to the right. Once the
					while loop terminates the{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">key</code> is
					placed to the left of the values greater than the{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">key</code>. The
					sub-array{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">
						arr[0 : i - 1]
					</code>{" "}
					now has all the elements originally in{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">
						arr[0 : i - 1]
					</code>
					, but in sorted order. We state these properties of{" "}
					<code className="bg-slate-900 pl-1 pr-1 rounded-sm">
						arr[0 : i - 1]
					</code>{" "}
					formally as a loop invariant.
				</p>
				<p className="leading-relaxed mt-4">
					Loop invariants help us understand why an algorithm is correct. When
					using loop invariants we need to show 3 things:
				</p>
				<ul className="list-disc mt-4 pl-4">
					<li>
						<span className="font-medium">Initialization</span>: It is true
						before the first iteration.
					</li>
					<li>
						<span className="font-medium">Maintenance</span>: It is true before
						an iteration and remains true before the next iteration.
					</li>
					<li>
						<span className="font-medium">Termination</span>: The loop
						terminates usually with a property to show that the algorithm is
						correct.
					</li>
				</ul>

				<p className="leading-relaxed mt-4">
					We can show that the loop invariant holds for the insertion sorting
					algorithm:
				</p>
				<ul className="list-disc mt-4 pl-4">
					<li>
						<span className="font-medium">Initialization</span>: The loop
						invariant holds before the first iteration when{" "}
						<code className="bg-slate-900 pl-1 pr-1 rounded-sm">i = 1</code>.
						The value in the sub-array{" "}
						<code className="bg-slate-900 pl-1 pr-1 rounded-sm">
							arr[0 : i]
						</code>{" "}
						contains only the single element, which is already sorted. This
						shows the invariant holdss before the first iteration of the for
						loop.
					</li>
					<li>
						<span className="font-medium">Maintenance</span>: The body of the
						for loop works by moving the values{" "}
						<code className="bg-slate-900 pl-1 pr-1 rounded-sm">arr[j]</code> by
						one position to the right until it finds the correct position for{" "}
						<code className="bg-slate-900 pl-1 pr-1 rounded-sm">arr[i]</code>.
						The index{" "}
						<code className="bg-slate-900 pl-1 pr-1 rounded-sm">i</code> is
						incremented and preserves the invariant for the next iteration.
					</li>
					<li>
						<span className="font-medium">Termination</span>: The loop start
						with the index{" "}
						<code className="bg-slate-900 pl-1 pr-1 rounded-sm">i</code> and
						increases it by one in each iteration, but terminates once{" "}
						<code className="bg-slate-900 pl-1 pr-1 rounded-sm">i</code> exceeds
						the value of{" "}
						<code className="bg-slate-900 pl-1 pr-1 rounded-sm">n</code>. So the
						sub-array contains all the elements originally in{" "}
						<code className="bg-slate-900 pl-1 pr-1 rounded-sm">
							arr[0 : n]
						</code>
						, but in sorted order. Hence, the algorithm is correct.
					</li>
				</ul>
			</div>
		</main>
	);
}

export default InsertionSortPage;
