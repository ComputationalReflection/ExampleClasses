
package examples.test.rule_3_10;

class B2 {
	
	private int a = 2;
	private int b = 2;
	private int c = 2;

	@Override
	public String toString() {
		String cc = c+"";
		return a+" "+b;
		
	}

	private String a(){
		return toString()+ this.toString();
	}

}
