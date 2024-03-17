file(
	GLOB_RECURSE app_test_src
	"${CMAKE_CURRENT_LIST_DIR}/*_test.cpp"
)

add_executable(tdd_test ${app_test_src})
target_link_libraries(tdd_test GTest::gtest_main gmock_main)

gtest_discover_tests(tdd_test)
