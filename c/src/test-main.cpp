#include <catch2/catch_test_macros.hpp>

int add(int a, int b) {
	return a+b;
}

TEST_CASE("Add number", "[catch2 test]") {
	REQUIRE(add(1,2)==3);
}
