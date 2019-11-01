#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

typedef struct {
  int y, x;
} Dir;

Dir mov[4] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
const int MAX = 25;
int cnt = 0;
bool visited[MAX][MAX];
vector<int> result;
string arr[MAX];
int N;

void DFS(int x, int y) {
  cnt ++;
  visited[x][y] = true;
  for (int i = 0; i < 4; i++) {
    int newX = mov[i].x + x;
    int newY = mov[i].y + y;
    if (newX >= 0 && newY >= 0 && newX < N && newY < N && arr[newX][newY] == '1' && visited[newX][newY] == false) {
      DFS(newX, newY);
    }
  }
}

int main() {
  cin >> N;
  for (int i = 0; i < N; i++) {
    cin >> arr[i];
  }
  for (int i=0; i<N; i++) {
    for (int j=0; j<N; j++) {
      visited[i][j] = false;
    }
  }
  for (int i=0; i<N; i++) {
    for (int j=0; j<N; j++) {
      if (visited[i][j] == false && arr[i][j] == '1') {
        cnt = 0;
        DFS(i, j);
        result.push_back(cnt);
      }
    }
  }
  cout << result.size() << endl;
  sort(result.begin(), result.end());
  for (int i = 0; i < result.size(); i++) {
    cout << result.at(i) << endl;
  }
}
