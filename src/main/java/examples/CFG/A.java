package examples.CFG;

import java.io.IOException;

public class A {
	public A() throws IOException {

	}

	public void m() throws IOException {
		new B().mThrows();
		m();
	}

	public static void main(String[] args) {
		try {
			if (args.length==0)
				throw new RuntimeException();
		} finally {
			System.out.println("FINALLY");
		}
		System.out.println("AFTER FINALLy");
	}
}
